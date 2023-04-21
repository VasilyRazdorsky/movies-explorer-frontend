const Divider = (isFooter) => {
    return <div className={`divider ${isFooter && "divider_place_footer"}`}></div>
}

export default Divider;