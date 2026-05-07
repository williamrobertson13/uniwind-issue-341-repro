import { Pressable, Text, View } from 'react-native';

import { copy641 } from '../generated/copy/copy641';
import { layout641 } from '../generated/layouts/layout641';
import { palette641 } from '../generated/palettes/palette641';

export function Screen641() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout641.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy641.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy641.detail} / {palette641.name}
			</Text>
		</View>
	);
}
