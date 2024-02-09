import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
import java.util.Random;

public class SnakeGame extends JFrame implements ActionListener, KeyListener {
	
	private static final int TILE_SIZE = 22;
	private static final int GRID_SIZE = 22;
	private static final int GAME_SPEED = 100;
	
	private ArrayList<Point> snake;
	private Point food;
	private int direction;
	
	public SnakeGame() {
		setTitle("Snake Game");
		setSize(TILE_SIZE * GRID_SIZE, TILE_SIZE * GRID_SIZE);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		
		snake = new ArrayList<>();
		snake.add(new Point(GRID_SIZE/2, GRID_SIZE/2));
		direction = KeyEvent.VK_RIGHT;
		
		spawnFood();
		
		Timer timer = new Timer(GAME_SPEED, this);
		timer.start();
		
		addKeyListener(this);
		setFocusable(true);
	}
	

	private void spawnFood() {
		// TODO Auto-generated method stub
		Random random = new Random();
		int x, y;
		do {
			x = random.nextInt(GRID_SIZE);
			y = random.nextInt(GRID_SIZE);
		}
		while(snake.contains(new Point(x, y)));
		
		food = new Point(x, y);
		
	}
	
	private void move() {
		Point head =  snake.get(0);
		Point newHead;
		
		switch(direction) {
		case KeyEvent.VK_UP:
			newHead = new Point(head.x, (head.y - 1 + GRID_SIZE) % GRID_SIZE);
			break;
		case KeyEvent.VK_DOWN:
			newHead = new Point(head.x, (head.y + 1) % GRID_SIZE);
			break;
		case KeyEvent.VK_LEFT:
			newHead = new Point((head.x - 1 + GRID_SIZE) % GRID_SIZE, head.y);
			break;
		case KeyEvent.VK_RIGHT:
			newHead = new Point((head.x + 1) % GRID_SIZE, head.y);
			break;
		default:
			return;
		}
		
		if(snake.contains(newHead) || newHead.equals(food)) {
			if(newHead.equals(food)) {
				snake.add(0, food);
				spawnFood();
			} else {
				JOptionPane.showConfirmDialog(this, "Game Over! Your Score: "+(snake.size()-1));
				System.exit(0);
			}
		} else {
			snake.add(0, newHead);
			snake.remove(snake.size()-1);
		}
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		move();
		repaint();
	}
	
	@Override
    public void paint(Graphics g) {
        super.paint(g);

        // Draw snake
        g.setColor(Color.GREEN);
        for (Point point : snake) {
            g.fillRect(point.x * TILE_SIZE, point.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }

        // Draw food
        g.setColor(Color.RED);
        g.fillRect(food.x * TILE_SIZE, food.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    public void keyTyped(KeyEvent e) {
    }
    
    public void keyPressed(KeyEvent e) {
        int key = e.getKeyCode();

        if ((key == KeyEvent.VK_LEFT && direction != KeyEvent.VK_RIGHT) ||
            (key == KeyEvent.VK_RIGHT && direction != KeyEvent.VK_LEFT) ||
            (key == KeyEvent.VK_UP && direction != KeyEvent.VK_DOWN) ||
            (key == KeyEvent.VK_DOWN && direction != KeyEvent.VK_UP)) {
            direction = key;
        }
    }

    public void keyReleased(KeyEvent e) {
    }


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SwingUtilities.invokeLater(() -> new SnakeGame().setVisible(true));

	}

}
