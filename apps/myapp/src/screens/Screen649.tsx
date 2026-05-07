import { Pressable, Text, View } from 'react-native';

import { copy649 } from '../generated/copy/copy649';
import { layout649 } from '../generated/layouts/layout649';
import { palette649 } from '../generated/palettes/palette649';

export function Screen649() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout649.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy649.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy649.detail} / {palette649.name}
			</Text>
		</View>
	);
}
