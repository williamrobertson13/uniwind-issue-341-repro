import { Pressable, Text, View } from 'react-native';

import { copy209 } from '../generated/copy/copy209';
import { layout209 } from '../generated/layouts/layout209';
import { palette209 } from '../generated/palettes/palette209';

export function Screen209() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout209.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy209.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy209.detail} / {palette209.name}
			</Text>
		</View>
	);
}
