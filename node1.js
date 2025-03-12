function func() {
    console.log("Main Function")
    func2 = () => {
        console.log(this)
    }

    function func3() {
        // this.prop = "VALUE";
        // console.log(this)
    }
    func3()
    func2()
}
func()