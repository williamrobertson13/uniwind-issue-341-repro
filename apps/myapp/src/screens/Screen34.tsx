import { Pressable, Text, View } from 'react-native';

import { copy34 } from '../generated/copy/copy34';
import { layout34 } from '../generated/layouts/layout34';
import { palette34 } from '../generated/palettes/palette34';

export function Screen34() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout34.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy34.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy34.detail} / {palette34.name}
			</Text>
		</View>
	);
}
