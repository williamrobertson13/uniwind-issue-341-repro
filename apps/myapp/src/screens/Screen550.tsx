import { Pressable, Text, View } from 'react-native';

import { copy550 } from '../generated/copy/copy550';
import { layout550 } from '../generated/layouts/layout550';
import { palette550 } from '../generated/palettes/palette550';

export function Screen550() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout550.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy550.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy550.detail} / {palette550.name}
			</Text>
		</View>
	);
}
