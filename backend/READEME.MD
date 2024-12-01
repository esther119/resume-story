# Flask Backend API

This is a simple Flask backend API application.

## Setup

1. Create a virtual environment (recommended):

   ```bash
   python -m venv myenv
   source myenv/bin/activate  # On Windows use: myenv\Scripts\activate
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python app.py
   ```

## API Endpoints

### GET /

- Returns "Hello, World!"
- Example response: `Hello, World!`

## Development

The application runs in debug mode by default when started directly with `python app.py`.
The server will run on `http://localhost:5000`.

## Requirements

- Python 3.x
- Flask 3.1.0

See `requirements.txt` for complete list of dependencies.
