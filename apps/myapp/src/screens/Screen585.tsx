import { Pressable, Text, View } from 'react-native';

import { copy585 } from '../generated/copy/copy585';
import { layout585 } from '../generated/layouts/layout585';
import { palette585 } from '../generated/palettes/palette585';

export function Screen585() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout585.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy585.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy585.detail} / {palette585.name}
			</Text>
		</View>
	);
}
