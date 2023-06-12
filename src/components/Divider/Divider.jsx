const Divider = ({ isGray }) => {
    return <div className={`divider ${isGray === true ? "divider_color_gray" : ""}`}></div>
}

export default Divider;