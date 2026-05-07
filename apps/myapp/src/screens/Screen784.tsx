import { Pressable, Text, View } from 'react-native';

import { copy784 } from '../generated/copy/copy784';
import { layout784 } from '../generated/layouts/layout784';
import { palette784 } from '../generated/palettes/palette784';

export function Screen784() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout784.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy784.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy784.detail} / {palette784.name}
			</Text>
		</View>
	);
}
