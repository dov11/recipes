import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import Pescatarian from '../images/pescatarian.svg'


chai.use(chaiEnzyme())

const recipes = [
  {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Agedashi Tofu',
    summary: 'Agedashi Tofu is one of those magical dishes where a few simple ingredients come together in a harmonizing synergy that elevates the dish from humble to divine. It is made with blocks of soft tofu that are coated in a thin layer of potato starch before being lightly fried.',
    vegan: true,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
  }
]



describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipes[0] } />)
  const container2 = shallow(<RecipeItem { ...recipes[1] } />)
  const container3 = shallow(<RecipeItem { ...recipes[2] } />)

  it('shows a 🐟  when it is pescatarian', () => {
    expect(container3.find('ul > li > img')).to.have.attr('src', Pescatarian)
  })

  it('shows a 🌾  when it is vegan', () => {
    expect(container2.find('ul > li')).to.have.text('🌾')
  })

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipes[0].title)
  })

  it('shows a 🥕  when it is vegetarian', () => {
    expect(container.find('ul > li')).to.have.text('🥕')
  })

})
