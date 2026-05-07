import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy925 } from '../generated/copy/copy925';
import { layout925 } from '../generated/layouts/layout925';
import { palette925 } from '../generated/palettes/palette925';

const RuntimeView925 = withUniwind(View);

export function Screen925() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView925 styleClassName={layout925.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy925.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy925.detail} / {palette925.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
