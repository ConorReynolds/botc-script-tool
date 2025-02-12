serve:
	@(trap 'kill 0' SIGINT; \
		sass --watch src/styles.scss src/styles.css & \
		tsc -w & \
		python3 -m http.server)
