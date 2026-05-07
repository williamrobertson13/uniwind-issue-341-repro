import { Pressable, Text, View } from 'react-native';

import { copy26 } from '../generated/copy/copy26';
import { layout26 } from '../generated/layouts/layout26';
import { palette26 } from '../generated/palettes/palette26';

export function Screen26() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout26.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy26.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy26.detail} / {palette26.name}
			</Text>
		</View>
	);
}
