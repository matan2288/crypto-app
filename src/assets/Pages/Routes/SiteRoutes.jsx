import { Route, Routes, Link, useRoutes, NavLink, useLocation } from 'react-router-dom'
import { PagesIndex } from '../PagesIndex'


export const SiteRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<PagesIndex.Home />}/>
        <Route path="/favorites" element={<PagesIndex.Favorites />}/>
        <Route path="*" element={<PagesIndex.NotFound />} />
    </Routes>
    </>
  )
}
