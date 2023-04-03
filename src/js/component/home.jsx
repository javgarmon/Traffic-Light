import React, {useState, useEffect} from "react";

const Home = () => {
	const [activeRed, setActiveRed] = useState("opacity-100");
	const [activeYellow, setActiveYellow] = useState("opacity-25");
	const [activeGreen, setActiveGreen] = useState("opacity-25");
	const [autoChange, setAutoChange] = useState(false)

	useEffect(() => {
		let intervalId;
		if (autoChange) {
			intervalId = setInterval(() => {
				if (activeRed === "opacity-100") {
					setActiveRed("opacity-25");
					setActiveYellow("opacity-100");
				} else if (activeYellow === "opacity-100") {
					setActiveYellow("opacity-25");
					setActiveGreen("opacity-100");
				} else {
					setActiveGreen("opacity-25");
					setActiveRed("opacity-100");
				}
			}, 2000);
		}

		return () => clearInterval(intervalId);
	}, [autoChange, activeRed, activeYellow, activeGreen]);

	const changeColorRed = () =>{
		setActiveRed("opacity-100");
		setActiveYellow("opacity-25");
		setActiveGreen("opacity-25");	
	};

	const changeColorYellow = () =>{
		setActiveYellow("opacity-100");
		setActiveRed("opacity-25");
		setActiveGreen("opacity-25");	
	};

	const changeColorGreen = () =>{
		setActiveGreen("opacity-100");	
		setActiveRed("opacity-25");
		setActiveYellow("opacity-25");
	};

	const toggleAutoChange = () => {
		setAutoChange(!autoChange);
	};
	
	return (
		<div className="container d-flex justify-content-center flex-column align-items-center">
			<div id="trafficLight" className="container d-flex justify-content-center flex-column align-items-center rounded">
				<div id="light" className={"rounded-circle btn btn-danger " + activeRed} onClick={changeColorRed}></div>
				<div id="light" className={"rounded-circle btn btn-warning " + activeYellow} onClick={changeColorYellow}></div>
				<div id="light" className={"rounded-circle btn btn-success " + activeGreen} onClick={changeColorGreen}></div>
			</div>
			<div className="mt-3">
				<button className="btn btn-primary me-3" onClick={toggleAutoChange}>
					{autoChange ? "Desactivar" : "Activar"} cambio automático
				</button>
			</div>
		</div>
	);
	};


export default Home;

// 2











