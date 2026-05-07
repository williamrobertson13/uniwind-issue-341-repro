import { Pressable, Text, View } from 'react-native';

import { copy353 } from '../generated/copy/copy353';
import { layout353 } from '../generated/layouts/layout353';
import { palette353 } from '../generated/palettes/palette353';

export function Screen353() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout353.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy353.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy353.detail} / {palette353.name}
			</Text>
		</View>
	);
}
