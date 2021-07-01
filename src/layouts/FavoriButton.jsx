import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function FavoriButton() {
    const {favoriItems} = useSelector(state => state.favori)
    return (
        <div>
            <Dropdown item icon='heart' style={{position:'center'}} text='FAVORİ İŞLERİM'>
            <Dropdown.Menu>
              {
                  favoriItems.map((favoriItem)=>(
                      <Dropdown.Item >
                        {favoriItem.jobNotice.id} 
                         <Label>
                        {favoriItem.quantity}
                      </Label>

                      </Dropdown.Item>
                  ))
              }
            
                {/* <Dropdown.Item as={NavLink} to="/">Sepete git</Dropdown.Item> */}
            </Dropdown.Menu>

            </Dropdown>


        </div>
    )
}