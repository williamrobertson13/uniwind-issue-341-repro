import { Pressable, Text, View } from 'react-native';

import { copy589 } from '../generated/copy/copy589';
import { layout589 } from '../generated/layouts/layout589';
import { palette589 } from '../generated/palettes/palette589';

export function Screen589() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout589.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy589.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy589.detail} / {palette589.name}
			</Text>
		</View>
	);
}
