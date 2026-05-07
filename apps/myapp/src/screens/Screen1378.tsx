import { Pressable, Text, View } from 'react-native';

import { copy1378 } from '../generated/copy/copy1378';
import { layout1378 } from '../generated/layouts/layout1378';
import { palette1378 } from '../generated/palettes/palette1378';

export function Screen1378() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1378.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1378.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1378.detail} / {palette1378.name}
			</Text>
		</View>
	);
}
