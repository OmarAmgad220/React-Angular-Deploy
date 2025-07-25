import './App.css'
import '@amiraelgarf/custom-frontend-library';
function App() {

    const textFieldArgs={
        textInPlaceholder: 'Enter your name here',
        lablelText: 'Enter Name: ',
        ColorOfLable: 'blue',
        Theme: 'VIQ-DarkTheme',
        variantSize: 'small',
        IsRequeredToFill: false,
        size: 30,
        disable: false,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const listArgs={
        items: ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5'],
        theme: 'VIQ-DarkTheme',
        spaceBetweenItems: 6,
        direction: 'row',
        wrap: true,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const dropDownArg={
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'medium',
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const rightClickArgs={
        theItems: [
            { idItem: 'file', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=F', textData: 'File', hasChildren: true, children: [
                { idItem: 'new', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=N', textData: 'New', functionality: () => console.log('New File!') },
                { idItem: 'open', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=O', textData: 'Open', functionality: () => console.log('Open File!') },
                { isDivisor: true },
                { idItem: 'save', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=S', textData: 'Save', functionality: () => console.log('Save File!') },
            ]},
            { idItem: 'edit', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=E', textData: 'Edit', hasChildren: true, children: [
                { idItem: 'cut', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Cut', functionality: () => console.log('Cut!') },
                { idItem: 'copy', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Copy', functionality: () => console.log('Copy!') },
                { idItem: 'paste', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=P', textData: 'Paste', functionality: () => console.log('Paste!') },
            ]},
            { isDivisor: true },
            { idItem: 'help', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=?', textData: 'Help', functionality: () => console.log('Help clicked!') },
        ],
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const sampleStudentGrades= [
        { name: "Student 1", semester1: 78, semester2: 82 },
        { name: "Student 2", semester1: 85, semester2: 88 },
        { name: "Student 3", semester1: 92, semester2: 95 },
        { name: "Student 4", semester1: 64, semester2: 70 },
        { name: "Student 5", semester1: 71, semester2: 75 },
        { name: "Student 6", semester1: 88, semester2: 91 },
        { name: "Student 7", semester1: 53, semester2: 62 },
        { name: "Student 8", semester1: 79, semester2: 83 },
        { name: "Student 9", semester1: 95, semester2: 97 },
        { name: "Student 10", semester1: 68, semester2: 73 },
        { name: "Student 11", semester1: 82, semester2: 85 },
        { name: "Student 12", semester1: 76, semester2: 80 },
        { name: "Student 13", semester1: 89, semester2: 92 },
        { name: "Student 14", semester1: 61, semester2: 68 },
        { name: "Student 15", semester1: 73, semester2: 77 },
        { name: "Student 16", semester1: 84, semester2: 87 },
        { name: "Student 17", semester1: 57, semester2: 65 },
        { name: "Student 18", semester1: 91, semester2: 94 },
        { name: "Student 19", semester1: 67, semester2: 72 },
        { name: "Student 20", semester1: 80, semester2: 84 },
        { name: "Student 21", semester1: 74, semester2: 79 },
        { name: "Student 22", semester1: 83, semester2: 86 },
        { name: "Student 23", semester1: 69, semester2: 74 },
        { name: "Student 24", semester1: 90, semester2: 93 },
        { name: "Student 25", semester1: 58, semester2: 66 },
        { name: "Student 26", semester1: 77, semester2: 81 },
        { name: "Student 27", semester1: 86, semester2: 89 },
        { name: "Student 28", semester1: 63, semester2: 69 },
        { name: "Student 29", semester1: 94, semester2: 96 },
        { name: "Student 30", semester1: 72, semester2: 76 },
    ];

    const histogramArgs={
        myWidth: 800,
        myHight: 500,
        nameOfChart: 'Grade Distribution (Semesters 1 & 2)',
        binCount: 10,
        data: sampleStudentGrades,
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const bubbleArgs={
        myHeight: 350,
        myTitle: 'Population by Country',
        xTitle: 'Country',
        yTitle: 'Population',
        bubbleData:  [
          { "country": "China", "population": 1416000000, "world_land_area_percentage": 6.30 },
          { "country": "India", "population": 1464000000, "world_land_area_percentage": 2.00 },
          { "country": "United States", "population": 347300000, "world_land_area_percentage": 6.14 },
          { "country": "Indonesia", "population": 285700000, "world_land_area_percentage": 1.22 },
          { "country": "Pakistan", "population": 255200000, "world_land_area_percentage": 0.52 },
          { "country": "Nigeria", "population": 237500000, "world_land_area_percentage": 0.61 },
          { "country": "Brazil", "population": 212800000, "world_land_area_percentage": 5.61 },
          { "country": "Bangladesh", "population": 175700000, "world_land_area_percentage": 0.10 },
          { "country": "Russia", "population": 144000000, "world_land_area_percentage": 11.00 },
          { "country": "Mexico", "population": 131900000, "world_land_area_percentage": 1.31 },
          { "country": "Japan", "population": 123100000, "world_land_area_percentage": 0.24 },
          { "country": "Ethiopia", "population": 135500000, "world_land_area_percentage": 0.67 },
          { "country": "Philippines", "population": 116800000, "world_land_area_percentage": 0.20 },
          { "country": "Egypt", "population": 118400000, "world_land_area_percentage": 0.67 },
          { "country": "DR Congo", "population": 112800000, "world_land_area_percentage": 1.52 },
          { "country": "Germany", "population": 84100000, "world_land_area_percentage": 0.23 },
          { "country": "United Kingdom", "population": 69600000, "world_land_area_percentage": 0.16 },
          { "country": "France", "population": 66700000, "world_land_area_percentage": 0.37 },
          { "country": "Canada", "population": 40100000, "world_land_area_percentage": 6.11 },
          { "country": "Australia", "population": 27000000, "world_land_area_percentage": 5.16 },
          { "country": "South Africa", "population": 60400000, "world_land_area_percentage": 0.81 },
          { "country": "Italy", "population": 58900000, "world_land_area_percentage": 0.20 },
          { "country": "Myanmar", "population": 54200000, "world_land_area_percentage": 0.45 },
          { "country": "Kenya", "population": 55100000, "world_land_area_percentage": 0.39 },
          { "country": "Colombia", "population": 52300000, "world_land_area_percentage": 0.75 },
          { "country": "Spain", "population": 47600000, "world_land_area_percentage": 0.34 },
          { "country": "Argentina", "population": 46000000, "world_land_area_percentage": 1.86 },
          { "country": "Algeria", "population": 44700000, "world_land_area_percentage": 1.56 },
          { "country": "Poland", "population": 37600000, "world_land_area_percentage": 0.21 },
          { "country": "Uzbekistan", "population": 35400000, "world_land_area_percentage": 0.29 },
          { "country": "Saudi Arabia", "population": 36900000, "world_land_area_percentage": 1.44 },
          { "country": "Ukraine", "population": 36700000, "world_land_area_percentage": 0.40 },
          { "country": "Morocco", "population": 37900000, "world_land_area_percentage": 0.30 },
          { "country": "Peru", "population": 34000000, "world_land_area_percentage": 0.85 },
          { "country": "Angola", "population": 36100000, "world_land_area_percentage": 0.85 },
          { "country": "Malaysia", "population": 33900000, "world_land_area_percentage": 0.22 },
          { "country": "Venezuela", "population": 29300000, "world_land_area_percentage": 0.67 },
          { "country": "Ghana", "population": 34000000, "world_land_area_percentage": 0.15 },
          { "country": "Afghanistan", "population": 41100000, "world_land_area_percentage": 0.44 },
          { "country": "Nepal", "population": 30600000, "world_land_area_percentage": 0.10 },
          { "country": "Yemen", "population": 33700000, "world_land_area_percentage": 0.35 }
          ]
    }
/////////////////////////////////////////////////////////////////////////////////////////////
    const scatterArgs={
        myHight: 600,
        myWidth: 800,
        nameOfSactter: "Sample Scatter Plot",
        colorOfPoint: "red",
        xTitle: "X Axis",
        yTitle: "Y Axis",
        xTicks: 30,
        yTicks: 10,
        data: [
            // Type A: y = 2x + 5 + noise
            {x: 0, y: 4.2, type: "A"}, {x: 3, y: 11.5, type: "A"}, {x: 6, y: 17.8, type: "A"},
            {x: 9, y: 23.9, type: "A"}, {x: 12, y: 29.2, type: "A"}, {x: 15, y: 35.1, type: "A"},
            {x: 18, y: 41.9, type: "A"}, {x: 21, y: 47.8, type: "A"}, {x: 24, y: 54.7, type: "A"},
            {x: 27, y: 60.8, type: "A"}, {x: 30, y: 67.7, type: "A"}, {x: 33, y: 73.8, type: "A"},
            {x: 36, y: 80.7, type: "A"}, {x: 39, y: 87.6, type: "A"}, {x: 42, y: 94.5, type: "A"},
            {x: 45, y: 101.4, type: "A"}, {x: 48, y: 108.3, type: "A"}, {x: 51, y: 115.2, type: "A"},
            {x: 54, y: 122.1, type: "A"}, {x: 57, y: 129.0, type: "A"}, {x: 60, y: 135.9, type: "A"},
            {x: 63, y: 142.8, type: "A"}, {x: 66, y: 149.7, type: "A"}, {x: 69, y: 156.6, type: "A"},
            {x: 72, y: 163.5, type: "A"}, {x: 75, y: 170.4, type: "A"}, {x: 78, y: 177.3, type: "A"},
            {x: 81, y: 184.2, type: "A"}, {x: 84, y: 191.1, type: "A"}, {x: 87, y: 198.0, type: "A"},
            {x: 90, y: 204.9, type: "A"}, {x: 93, y: 211.8, type: "A"}, {x: 96, y: 218.7, type: "A"},
            // Type B: y = 1.5x + 10 + noise
            {x: 1, y: 11.3, type: "B"}, {x: 4, y: 16.7, type: "B"}, {x: 7, y: 21.4, type: "B"},
            {x: 10, y: 25.3, type: "B"}, {x: 13, y: 29.5, type: "B"}, {x: 16, y: 34.4, type: "B"},
            {x: 19, y: 38.7, type: "B"}, {x: 22, y: 43.1, type: "B"}, {x: 25, y: 47.5, type: "B"},
            {x: 28, y: 52.1, type: "B"}, {x: 31, y: 56.5, type: "B"}, {x: 34, y: 61.1, type: "B"},
            {x: 37, y: 65.7, type: "B"}, {x: 40, y: 70.3, type: "B"}, {x: 43, y: 74.9, type: "B"},
            {x: 46, y: 79.5, type: "B"}, {x: 49, y: 84.1, type: "B"}, {x: 52, y: 88.7, type: "B"},
            {x: 55, y: 93.3, type: "B"}, {x: 58, y: 97.9, type: "B"}, {x: 61, y: 102.5, type: "B"},
            {x: 64, y: 107.1, type: "B"}, {x: 67, y: 111.7, type: "B"}, {x: 70, y: 116.3, type: "B"},
            {x: 73, y: 120.9, type: "B"}, {x: 76, y: 125.5, type: "B"}, {x: 79, y: 130.1, type: "B"},
            {x: 82, y: 134.7, type: "B"}, {x: 85, y: 139.3, type: "B"}, {x: 88, y: 143.9, type: "B"},
            {x: 91, y: 148.5, type: "B"}, {x: 94, y: 153.1, type: "B"}, {x: 97, y: 157.7, type: "B"},
            // Type C: y = 3x + 0 + noise
            {x: 2, y: 6.1, type: "C"}, {x: 5, y: 15.2, type: "C"}, {x: 8, y: 24.6, type: "C"},
            {x: 11, y: 33.7, type: "C"}, {x: 14, y: 42.8, type: "C"}, {x: 17, y: 51.9, type: "C"},
            {x: 20, y: 60.5, type: "C"}, {x: 23, y: 69.4, type: "C"}, {x: 26, y: 78.5, type: "C"},
            {x: 29, y: 87.6, type: "C"}, {x: 32, y: 96.7, type: "C"}, {x: 35, y: 105.8, type: "C"},
            {x: 38, y: 114.9, type: "C"}, {x: 41, y: 124.0, type: "C"}, {x: 44, y: 133.1, type: "C"},
            {x: 47, y: 142.2, type: "C"}, {x: 50, y: 151.3, type: "C"}, {x: 53, y: 160.4, type: "C"},
            {x: 56, y: 169.5, type: "C"}, {x: 59, y: 178.6, type: "C"}, {x: 62, y: 187.7, type: "C"},
            {x: 65, y: 196.8, type: "C"}, {x: 68, y: 205.9, type: "C"}, {x: 71, y: 215.0, type: "C"},
            {x: 74, y: 224.1, type: "C"}, {x: 77, y: 233.2, type: "C"}, {x: 80, y: 242.3, type: "C"},
            {x: 83, y: 251.4, type: "C"}, {x: 86, y: 260.5, type: "C"}, {x: 89, y: 269.6, type: "C"},
            {x: 92, y: 278.7, type: "C"}, {x: 95, y: 287.8, type: "C"}, {x: 98, y: 296.9, type: "C"},
            {x: 100, y: 305.0, type: "C"}
        ]
    }
/////////////////////////////////////////////////////////////////////////////////////////////
  return (
        <div>
            <button>CILCIK ME</button>
            <hr className="Separator"></hr>
            <div className="component-section text-field-section"> 
                <my-text-field {...textFieldArgs} ></my-text-field>
            </div>

            <div className="component-section list-section"> 
                <h3>My List</h3>
                <my-list {...listArgs}></my-list>
            </div>

            <div className="component-section dropdown-section"> 
                <h3>My Dropdown Menu</h3>
                <my-dropdown-menu {...dropDownArg}></my-dropdown-menu>
            </div>

            <right-click-menu-v1 {...rightClickArgs} className='right-click-section'>
                <h3>Right Click is working anywhere in this section</h3>
                <p>for some reason you have to click twice for the menu to render at the correct position  </p>
             </right-click-menu-v1>
                
            <div className="component-section histogram-section"> 
                <h3>Histogram Chart</h3>
                <histogram-chart {...histogramArgs}> </histogram-chart>
            </div>

            <div className="component-section bubble-chart-section"> 
                <h3>Bubble Chart</h3>
                <bubble-chart {...bubbleArgs}></bubble-chart>
            </div>

            <div className="component-section scatter-plot-section"> 
                <h3>Scatter Plot</h3>
                <scatter-plot {...scatterArgs}></scatter-plot>
            </div>
        </div>
    )
}

export default App
