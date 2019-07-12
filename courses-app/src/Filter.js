import React from 'react';
import clsx from 'clsx';
import Select from 'react-select';
import { emphasize, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*const theData = [
  {
      cat: 'PirmaKat',
      subcat: 'PirmaSubkat',
      city_C: 'V'
  },

  {
      cat: 'AntraKat',
      subcat: 'AntraSubkat',
      city_C: 'M1'
  },

  {
      cat: 'AntraKat',
      subcat: 'AntraSubkat',
      city_C: 'V'
  }
]
*/
//const listItems = theData.map((d) => <li key={d.cat}>{d.cat+ " "}{d.subcat+ " "}{d.city_C}</li>);
//const filterFirstCat = theData.filter(cat => cat.cat === 'AntraKat');
//const mapFiltered = filterFirstCat.map((d) => <li key={d.cat}>{d.cat+ " "}{d.subcat+ " "}{d.city_C}</li>);
const kategorijos = [

  { label: 'GROŽIS' },
  { label: 'IT' },
  { label: 'APSKAITA' },
  { label: 'PARDAVIMAI' }
 
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const subkategorijos = [

  { label: 'SUB1' },
  { label: 'SUB2' },
  { label: 'SUB3' },
  { label: 'SUB4' },
  { label: 'SUB5' },
  { label: 'SUB6' },

].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const miestas = [

  { label: 'M1' },
  { label: 'M2' },
  { label: 'M3' },
  { label: 'M4' },
  { label: 'M5' },
  { label: 'M6' },

].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const kaina = [

  { label: 'K1' },
  { label: 'K2' },
  { label: 'K3' },
  { label: 'K4' },
  { label: 'K5' },
  { label: 'K6' },

].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,

}));

const lektorius = [

  { label: 'L1' },
  { label: 'L2' },
  { label: 'L3' },
  { label: 'L4' },
  { label: 'L5' },
  { label: 'L6' },

].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,

}));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "gray !important"

  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    //margin: 10 
    padding:5 
    
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },

  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,

  },

  divider: {
    height: theme.spacing(2),
  },
}));

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField

      variant="outlined"
      fullWidth
      InputProps={{
        classes: {
          notchedOutline: classes.notchedOutline
        },
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,

      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

const components = {
  Control,
  MultiValue,
  Option,
  ValueContainer
};

const components2 = {
  Control,
  
};
export default function IntegrationReactSelect() {
  const classes = useStyles();
  const [category, setCat] = React.useState(null);
  const [subcategory, setSubcat] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [lector, setLector] = React.useState(null);

  function handleChangeCategory(value) {  
    setCat(value);
  }

  function handleChangeSubcategory(value) {
    setSubcat(value);
  }

  function handleChangeCity(value) {
    setCity(value);
  }

  function handleChangePrice(value) {
    setPrice(value);
  }

  function handleChangeLector(value) {
    setLector(value);
  }

  return (
    <div className="filterDiv">
      <div className="detaliPaieska">
        DETALI PAIEŠKA</div>
      <div className={classes.divider} />
      <form onSubmit="#">
        <p>Kategorijos</p>
        <Select
          placeholder="All"
          classes={classes}
          options={kategorijos}
          components={components}
          value={category}
          onChange={handleChangeCategory}
          isMulti
        />
        <p>Subkategorijos</p>
        <Select
          placeholder="All"
          classes={classes}
          options={subkategorijos}
          components={components}
          value={subcategory}
          onChange={handleChangeSubcategory}
          isMulti
        />

        <p>Miestas</p>
        <Select
          placeholder="All"
          classes={classes}
          options={miestas}
          components={components}
          value={city}
          onChange={handleChangeCity}
          isMulti
        />

        <p>Data nuo:</p>
        <DatePicker
        selected={new Date()}
        components={components2}
        className="datos"

      />
        
        <p>Kaina</p>
        <Select
          placeholder="Nuo"
          classes={classes}
          options={kaina}
          components={components}
          value={price}
          onChange={handleChangePrice}
          isMulti
        />
        <p>Lektorius</p>
        <Select
          placeholder="All"
          classes={classes}
          options={lektorius}
          components={components}
          value={lector}
          onChange={handleChangeLector}
          isMulti
        />
        <br></br>
        <label>
        <input type="checkbox" value="value" />
        Švietimo ir mokslo institucijos patvirtintas sertifikatas      
          </label>
          
        <br></br>
        <label>
          <input type="checkbox" value="value" />
          Populiarus kategorijoje
          </label> 
        <br></br>
        <br></br>

        <input type="submit" value="Ieškoti" className="searchB" />

      </form>
      
      {/*<p>Visi kursai (Kategorija, subkategorija, miestas)</p>
      {listItems }
      <p>Filtruoti kursai (Kategorija, subkategorija, miestas)</p>
      {mapFiltered}*/} 
      
      <br></br>
      </div>
  );
}