import { Pressable, Text, View } from 'react-native';

import { copy742 } from '../generated/copy/copy742';
import { layout742 } from '../generated/layouts/layout742';
import { palette742 } from '../generated/palettes/palette742';

export function Screen742() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout742.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy742.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy742.detail} / {palette742.name}
			</Text>
		</View>
	);
}
