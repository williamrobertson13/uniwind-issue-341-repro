import { Pressable, Text, View } from 'react-native';

import { copy249 } from '../generated/copy/copy249';
import { layout249 } from '../generated/layouts/layout249';
import { palette249 } from '../generated/palettes/palette249';

export function Screen249() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout249.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy249.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy249.detail} / {palette249.name}
			</Text>
		</View>
	);
}
