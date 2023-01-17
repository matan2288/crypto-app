import { Route, Routes } from 'react-router-dom'
import { PagesIndex } from '../PagesIndex'


export const SiteRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<PagesIndex.Home />}/>
        <Route path="/favorites" element={<PagesIndex.Favorites />}/>
        <Route path="/coin">
           <Route path=":id" element={<PagesIndex.CoinInfoPage />}/>
        </Route>
        <Route path="*" element={<PagesIndex.NotFound />} />
    </Routes>
    </>
  )
}
