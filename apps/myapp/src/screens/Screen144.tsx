import { Pressable, Text, View } from 'react-native';

import { copy144 } from '../generated/copy/copy144';
import { layout144 } from '../generated/layouts/layout144';
import { palette144 } from '../generated/palettes/palette144';

export function Screen144() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout144.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy144.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy144.detail} / {palette144.name}
			</Text>
		</View>
	);
}
