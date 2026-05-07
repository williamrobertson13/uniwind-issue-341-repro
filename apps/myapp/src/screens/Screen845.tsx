import { Pressable, Text, View } from 'react-native';

import { copy845 } from '../generated/copy/copy845';
import { layout845 } from '../generated/layouts/layout845';
import { palette845 } from '../generated/palettes/palette845';

export function Screen845() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout845.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy845.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy845.detail} / {palette845.name}
			</Text>
		</View>
	);
}
