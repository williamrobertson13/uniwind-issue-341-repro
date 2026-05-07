import { Pressable, Text, View } from 'react-native';

import { copy929 } from '../generated/copy/copy929';
import { layout929 } from '../generated/layouts/layout929';
import { palette929 } from '../generated/palettes/palette929';

export function Screen929() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout929.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy929.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy929.detail} / {palette929.name}
			</Text>
		</View>
	);
}
