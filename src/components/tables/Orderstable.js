import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Table, { Irow } from 'react-tailwind-table';
import tw from 'twrnc';
import {row,col} from "./table-data";


class Orderstable extends Component {

      componentDidMount(){

        // setTimeout(() => {
        //     // callback()
        //    this.setState({
        //      columns:[...this.state.columns, ...second_column()]
        //    })
        //   }, 12000);


        // setTimeout(() => {
        //     // callback()
        //    this.setState({
        //      rows:[...second_row(),...this.state.rows]
        //    })
        //   }, 15000);
      }

      rowcheck = (row: any,column: any, display_text: string) => {

        if (column.field === "action") {
          return <button style={tw.style('border border-gray-100 p-2 bg-blue-500 text-white rounded-md')}><Text>Save Player</Text></button>
        }
        return display_text
      }

      render() {
        return (
          <View style={tw.style('p-5')}>
            <View columns={col} rows={row}
            per_page={5} table_header="My Table Is Good"
            bulk_select_options={["Save","Delete","Update"]}
            // export_csv_file = "FuckThisShit"
            on_bulk_action={tableBulkClick}
            // should_export={true}
            on_search = {onSearch}
            show_search = {true}
            // export_modify={exportModify}
            striped={true}
            bordered={true}
            hovered={true}
            styling={tableStyling}
            row_render ={this.rowcheck}
            // bulk_select_button_text="Apply"
            ></View>
          </View>
        )
        // return <Table columns={this.state.columns} rows={this.state.rows} per_page={3} table_header="Test Table" show_search = {true} row_render ={this.rowcheck}/>
      }
    }

    function tableBulkClick(option: string,value:Irow[]){
      // console.log(option,value)
    }


    function onSearch(text:any,values:any){
      // console.log(text, "On search")
    }

    function exportModify(a:any,b:any,c:any){
      // console.log(a,b,c)

      return "Fool"
    }


    const tableStyling = {
      base_bg_color:"bg-green-600 base_bg_color_class",
      base_text_color:"text-green-600 base_text_color_class",
      top:{
        title:"text-red-700 top_title_class",
        elements: {
          main: "bg-green-700 top_elements_main_class",
          search: "text-white top_elements_search_class",
          bulk_select:{
            main:"bg-green-700 text-white top_elements_bulk_search_main_class",
            button:"bg-yellow-700 text-black px-5 top_elements_bulk_search_button_class"
          },
          export:"text-yellow-800 top_elements_bulk_search_main_class top_elements_export_class"
        }
      },
      table_head:{
        table_row: "bg-green-800 text-white",
        table_data:"text-white"
      },
      table_body:{
        main:"bg-red-600",
        table_row:"text-yellow-900",
        table_data: "text-base"
      },
      footer:{
        main: "bg-yellow-700",
        statistics:{
          main: "bg-white text-green-900",
          bold_numbers:"text-yellow-800 font-thin"
        },
        page_numbers:"bg-red-600 text-white"
      }
    }

    function column() {
    return [
      {
        field: "front_end_position.name",
        use: "Position"
      },
      {
        // use_in_display: false,
        field: "name", //Object destructure
        use: "Name"
      },

      {
        field: "created_at",
        use: "Action",
        // use_in_search:false
      }]
  }

function second_column() {
    return [

       {
        field: "position_id",
        use: "Position",
        // use_in_search:false
      },
      {
        field: "shirt_number",
        use: "Shirt",
      }]
  }


  function fakePlayers(){

    return [{
      id: 1,
      name: "Sadio Mane",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"attach",
        id:2
      }
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Forward",
        id:4
      }
    },
    {
      id: 3,
      name: "Robertor Fermino",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "8",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Defence",
        id:9
      }
    }];
  }

  function second_row(){

    return [{
      id: 1,
      name: "Fabinho Hernamded",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"attach",
        id:2
      }
    },
    {
      id: 2,
      name: "Henderson",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Forward",
        id:4
      }
    },
    {
      id: 3,
      name: "Virgil Van'Dijk",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "8",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Defence",
        id:9
      }
    }];
  }



export default Orderstable
