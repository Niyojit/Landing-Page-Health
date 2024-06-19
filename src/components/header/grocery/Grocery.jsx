import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import './grocery.css'; // Make sure to import the CSS file

export default function Grocery() {
    const [diet, setdiet] = React.useState('Daily');
    const [quantities, setQuantities] = React.useState({
        Fruits: 100,
        Vegetables: 100,
        Millets: 100,
        CoconutWater: 100,
        Sprouts: 100,
        DryFruits: 100,
        HunzaTea: 100
    });

    const handleChange = (event) => {
        const selectedDiet = event.target.value;
        setdiet(selectedDiet);
        let factor = 1;
        if (selectedDiet === 'Weekly') {
            factor = 7;
        } else if (selectedDiet === 'Monthly') {
            factor = 28;
        }
        setQuantities({
            Fruits: 100 * factor,
            Vegetables: 100 * factor,
            Millets: 100 * factor,
            CoconutWater: 100 * factor,
            Sprouts: 100 * factor,
            DryFruits: 100 * factor,
            HunzaTea: 100 * factor
        });
    };

    const MenuProps = {
        PaperProps: {
            className: 'MuiPaper-root',
        },
    };

    return (
        <div className="Grocery">
            <div className="GroceryHeadingContainer">
                <span className="GroceryHeading">HEALTHY GROCERY LIST</span>
                <Box className="CustomBox">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" className="CustomInputLabel">Diet</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={diet}
                            label="Diet"
                            onChange={handleChange}
                            MenuProps={MenuProps}
                            className="CustomSelect"
                        >
                            <MenuItem value="Daily">Daily</MenuItem>
                            <MenuItem value="Weekly">Weekly</MenuItem>
                            <MenuItem value="Monthly">Monthly</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="TableGrocery">
                <ul className="TableGrocery1">
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1.png" alt="" className="imageFruits"/>Fruits:</li>
                        <span className="rowNumber1">{quantities.Fruits}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (1).png" alt="" className="imageFruits"/>Vegetables:</li>
                        <span className="rowNumber1">{quantities.Vegetables}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (2).png" alt="" className="imageFruits"/>Millets:</li>
                        <span className="rowNumber1">{quantities.Millets}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (3).png" alt="" className="imageFruits"/>Coconut Water:</li>
                        <span className="rowNumber1">{quantities.CoconutWater}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (4).png" alt="" className="imageFruits"/>Sprouts/Green Leaves:</li>
                        <span className="rowNumber1">{quantities.Sprouts}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (5).png" alt="" className="imageFruits"/>Dry Fruits:</li>
                        <span className="rowNumber1">{quantities.DryFruits}g</span>
                    </div>
                    <div className="rowsGrocery">
                        <li className="rowData1"><img src="/assests/clock 1 (6).png" alt="" className="imageFruits"/>Hunza Tea:</li>
                        <span className="rowNumber1">{quantities.HunzaTea}g</span>
                    </div>
                </ul>
                <div className="GroceryImagecontainer">
                    <img src="/assests/sideimage.png" alt="" className="GroceryImage" />
                </div>
            </div>
            <div className="ButtonContainer"> {/* Add a container for the button */}
                <button className="buy">
                    <span className="buybtn">BUY NOW</span>
                </button>
            </div>
        </div>
    );
}
