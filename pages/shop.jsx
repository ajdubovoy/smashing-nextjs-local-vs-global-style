import TeaList from "../components/TeaList"

const teas = [
  { name: "Oolong", description: "A partially fermented tea.", image: "/oolong.jpg" },
  { name: "Yunnan Gold", description: "A classic tea from China.", image: "/red.jpg" },
  { name: "Flowering", description: "Makes beautiful art when brewed.", image: "/flowering.jpg" }
]

export default function Shop() {
  return <main>
    <div className="lockup">
      <h1>Shop Our Teas</h1>
    </div>

    <TeaList teas={teas} />
  </main>
}
