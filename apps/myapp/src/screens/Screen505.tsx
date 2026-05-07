import { Pressable, Text, View } from 'react-native';

import { copy505 } from '../generated/copy/copy505';
import { layout505 } from '../generated/layouts/layout505';
import { palette505 } from '../generated/palettes/palette505';

export function Screen505() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout505.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy505.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy505.detail} / {palette505.name}
			</Text>
		</View>
	);
}
