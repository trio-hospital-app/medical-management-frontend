import './loader.css'
function Loader() {
  return (
    <div  className="fixed top-0 bottom-0 left-0 right-0  z-[50] flex items-center justify-center body">
    <div className="pl">
      <svg
        className="pl__rings"
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
      >
        <g fill="none" stroke-linecap="round" stroke-width="4">
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.3)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.3)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              stroke-dasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              stroke-dasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              stroke-dasharray="1 289"
              stroke-width="8"
            />
          </g>
        </g>
      </svg>
      <div className="pl__nucleus">
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
      </div>
    </div>
    </div>

  );
}

export default Loader;
