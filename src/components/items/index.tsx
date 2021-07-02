import React from 'react';
import data from './data';

const DOMAIN = "https://www.scbuildit.hubsinfo.net";
const COLORMAP = ["gray-500", "orange-500", "indigo-500", "green-300", "yellow-800", "green-500", "pink-500", "purple-300", "yellow-400", "blue-500", '', '', '', '', '', '', '', "teal-400"]

const REPLACEMENT: [RegExp|string, string][] = [
	[/Bread$/, "Bread Roll"],
	["Bags", "Bag"],
	['Fruit Berries', 'Fruit and Berries'],
	["Tables", "Table"],
	["Fruits and Berries", "Fruit and Berries"],
	["Back Pack", "Backpack"]
];

const getReplaced = (str: string) => {
	REPLACEMENT.forEach(([o, r]) => str = str.replace(o, r));
	return str
}

const getCMAPIndex = (name: string) => {
	const index = data.map(e => e[1].some(e => e[1] === getReplaced(name))).indexOf(true)
	return index !== -1 ? index : 999
}

const Items = (): JSX.Element => {
	return <>{data.map(([title, elements], index) => 
	<div>
		<h1 className="text-center font-extrabold text-4xl mb-8">{title}</h1>
		<div className="grid items-center justify-center gap-5 mb-32 px-20" style={{gridTemplateColumns: "repeat(auto-fill, minmax(18em, 1fr))", gridAutoRows: "1fr"}}>
			{elements.map(([img, name, level, time, maxVal, mats, used, desc]) => 
				<div className="bg-white rounded-xl flex flex-col items-center p-6 pb-20 relative h-full" style={{boxShadow: "0 4px 4px rgba(0, 0, 0, .25)"}} id={name.toLowerCase().replace(/\s/g, "-")}>
					<h3 className="font-extrabold text-lg mb-3">LEVEL {level}</h3>
					<div className={`w-32 h-32 rounded-full bg-${COLORMAP[index]}`} style={{padding: ".4em", boxShadow: "inset 0 2px 6px rgba(0, 0, 0, .6)"}}>
						<div className="rounded-full overflow-hidden" style={{boxShadow: "0 2px 4px rgba(0, 0, 0, .6)"}}>
							<img src={DOMAIN+img} className="bg-white p-5" alt={name}/>
						</div>
					</div>
					<h2 className="font-extrabold text-3xl pt-4 text-center leading-tight">{name}</h2>
					<div className="font-extrabold flex items-center mt-1">
						<img src="https://www.scbuildit.hubsinfo.net/images/icons/misc-icons/currency_coins.png" className="w-5 mr-1" alt="coin"/>
						{maxVal}
					</div>
					<p className="font-bold text-xl text-center mt-5 text-gray-900 leading-tight">{desc}</p>
					{([[mats, "Materials"], [used, "Used"]] as [any[], string][]).map(([e, n]) => elements.map(() => e.length > 0).some(e => e) ? 
						<><h3 className="font-extrabold text-lg mb-3 mt-4">{n}</h3>
						<div className="flex">
							{e.map(([i, , n]) => 
							<div className={`flex items-center justify-center w-12 h-12 mx-1 rounded-full bg-${COLORMAP[getCMAPIndex(n)]}`} style={{boxShadow: "inset 0 2px 6px rgba(0, 0, 0, .6)"}}>
								<a href={"#"+getReplaced(n).replace(/\s/g, "-").toLowerCase()}>
									<div className="rounded-full overflow-hidden" style={{boxShadow: "0 2px 4px rgba(0, 0, 0, .6)"}}>
										<img src={`${DOMAIN+i}`} className="bg-white  p-2 w-10 h-10" alt={n}/>
									</div>
								</a>
							</div>
							)}
						</div></> : "")}
					<h3 className="font-extrabold absolute left-50" style={{bottom: "1.4em"}}>MIN. {time} minutes</h3>
				</div>
			)}
		</div>
	</div>
)}</>
}

export default Items