const Header = () => {
    return (
        <header className="header">
            <h1>Korean Tourist Information
                (전국관광지정보)</h1>
            <select>
                <option selected>관광지구분 선택</option>
                <option>관광지</option>
                <option>관광단지</option>
            </select>
        </header>
    )
}
export default Header