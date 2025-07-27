serve:
	@(trap 'kill 0' SIGINT; \
		sass --watch src/styles.scss src/styles.css & \
		tsc -w & \
	    live-server --no-browser --host=0.0.0.0 --port=8000 --ignore=.git/**,**/*.map,**/*.ts,**/*.scss)
