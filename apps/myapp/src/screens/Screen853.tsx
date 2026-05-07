import { Pressable, Text, View } from 'react-native';

import { copy853 } from '../generated/copy/copy853';
import { layout853 } from '../generated/layouts/layout853';
import { palette853 } from '../generated/palettes/palette853';

export function Screen853() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout853.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy853.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy853.detail} / {palette853.name}
			</Text>
		</View>
	);
}
