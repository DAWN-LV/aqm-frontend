import { socket } from "@/globals"

export default class SensorSubscription {
  onCreate(callback: (id: number) => void) {
    return this.listener("CREATE", callback)
  }

  onUpdate(callback: (id: number) => void) {
    return this.listener("UPDATE", callback)
  }

  onDelete(callback: (id: number) => void) {
    return this.listener("DELETE", callback)
  }

  private listener(action: string, callback: (id: number) => void) {
    return socket.on("SENSOR", ({ type, data }) => {
      console.log("SENSOR", data)
      if (type === action) {
        callback(data.id)
      }
    })
  }
}