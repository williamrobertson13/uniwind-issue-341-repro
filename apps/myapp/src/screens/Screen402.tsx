import { Pressable, Text, View } from 'react-native';

import { copy402 } from '../generated/copy/copy402';
import { layout402 } from '../generated/layouts/layout402';
import { palette402 } from '../generated/palettes/palette402';

export function Screen402() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout402.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy402.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy402.detail} / {palette402.name}
			</Text>
		</View>
	);
}
