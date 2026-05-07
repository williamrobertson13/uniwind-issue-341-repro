import { Pressable, Text, View } from 'react-native';

import { copy506 } from '../generated/copy/copy506';
import { layout506 } from '../generated/layouts/layout506';
import { palette506 } from '../generated/palettes/palette506';

export function Screen506() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout506.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy506.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy506.detail} / {palette506.name}
			</Text>
		</View>
	);
}
