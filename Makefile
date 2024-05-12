dev:
		@. .venv/bin/activate && python3 -m http.server 8000

install:
		@python3 -m venv .venv
		@. .venv/bin/activate
