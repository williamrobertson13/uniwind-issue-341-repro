import { Pressable, Text, View } from 'react-native';

import { copy314 } from '../generated/copy/copy314';
import { layout314 } from '../generated/layouts/layout314';
import { palette314 } from '../generated/palettes/palette314';

export function Screen314() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout314.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy314.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy314.detail} / {palette314.name}
			</Text>
		</View>
	);
}
