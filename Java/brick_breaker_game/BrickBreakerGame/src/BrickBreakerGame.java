import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

class Brick {
	private int x, y, width, height;
	private boolean visible;

	public Brick(int x, int y, int width, int height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.visible = true;
	}

	public int getX() {
		return x;
	}

	public int getY() {
		return y;
	}

	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}
}

public class BrickBreakerGame extends JFrame implements ActionListener, KeyListener {
	private static final int WIDTH = 800;
	private static final int HEIGHT = 600;
	private static final int PADDLE_WIDTH = 100;
	private static final int PADDLE_HEIGHT = 20;
	private static final int BALL_SIZE = 20;

	private int paddleX;
	private int ballX, ballY, ballSpeedX, ballSpeedY;
	private boolean ballMoving;
	private Timer timer;

	private Brick[] bricks;

	public BrickBreakerGame() {
		setTitle("Brick Breaker Game");
		setSize(WIDTH, HEIGHT);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setResizable(false);
		setLocationRelativeTo(null);

		paddleX = WIDTH / 2 - PADDLE_WIDTH / 2;
		ballX = WIDTH / 2 - BALL_SIZE / 2;
		ballY = HEIGHT - PADDLE_HEIGHT - BALL_SIZE;
		ballSpeedX = 2;
		ballSpeedY = -2;
		ballMoving = false;

		bricks = new Brick[60];
		int brickWidth = 60;
		int brickHeight = 20;
		int brickX = 50;
		int brickY = 50;

		for (int i = 0; i < bricks.length; i++) {
			bricks[i] = new Brick(brickX, brickY, brickWidth, brickHeight);
			brickX += brickWidth + 10;
			if (brickX + brickWidth > WIDTH - 50) {
				brickX = 50;
				brickY += brickHeight + 10;
			}
		}

		timer = new Timer(10, this);
		timer.start();

		addKeyListener(this);
		setFocusable(true);
	}

	public void paint(Graphics g) {
		super.paint(g);
		g.setColor(Color.BLACK);
		g.fillRect(0, 0, WIDTH, HEIGHT);

		g.setColor(Color.WHITE);
		g.fillRect(paddleX, HEIGHT - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);

		g.setColor(Color.RED);
		g.fillOval(ballX, ballY, BALL_SIZE, BALL_SIZE);

		for (Brick brick : bricks) {
			if (brick.isVisible()) {
				g.setColor(Color.BLUE);
				g.fillRect(brick.getX(), brick.getY(), brick.getWidth(), brick.getHeight());
			}
		}

		Toolkit.getDefaultToolkit().sync();
	}

	public void actionPerformed(ActionEvent e) {
		if (ballMoving) {
			ballX += ballSpeedX;
			ballY += ballSpeedY;

			if (ballX <= 0 || ballX >= WIDTH - BALL_SIZE) {
				ballSpeedX = -ballSpeedX;
			}
			if (ballY <= 0) {
				ballSpeedY = -ballSpeedY;
			}
			if (ballY >= HEIGHT - BALL_SIZE) {
				ballMoving = false;
				gameOver();
			}

			Rectangle ballRect = new Rectangle(ballX, ballY, BALL_SIZE, BALL_SIZE);
			Rectangle paddleRect = new Rectangle(paddleX, HEIGHT - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);

			if (ballRect.intersects(paddleRect)) {
				ballSpeedY = -ballSpeedY;
			}

			for (Brick brick : bricks) {
				if (brick.isVisible()) {
					Rectangle brickRect = new Rectangle(brick.getX(), brick.getY(), brick.getWidth(),
							brick.getHeight());
					if (ballRect.intersects(brickRect)) {
						brick.setVisible(false);
						ballSpeedY = -ballSpeedY;
					}
				}
			}
		}

		repaint();
	}

	private void gameOver() {
		timer.stop();
		JOptionPane.showMessageDialog(this, "Game Over", "Game Over", JOptionPane.INFORMATION_MESSAGE);
		System.exit(0);
	}

	public void keyPressed(KeyEvent e) {
		int key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT && paddleX > 0) {
			paddleX -= 20;
		}
		if (key == KeyEvent.VK_RIGHT && paddleX < WIDTH - PADDLE_WIDTH) {
			paddleX += 20;
		}
		if (key == KeyEvent.VK_SPACE) {
			ballMoving = true;
		}
	}

	public void keyReleased(KeyEvent e) {
	}

	public void keyTyped(KeyEvent e) {
	}

	public static void main(String[] args) {
		SwingUtilities.invokeLater(() -> {
			BrickBreakerGame game = new BrickBreakerGame();
			game.setVisible(true);
		});
	}
}
