import { Pressable, Text, View } from 'react-native';

import { copy686 } from '../generated/copy/copy686';
import { layout686 } from '../generated/layouts/layout686';
import { palette686 } from '../generated/palettes/palette686';

export function Screen686() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout686.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy686.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy686.detail} / {palette686.name}
			</Text>
		</View>
	);
}
