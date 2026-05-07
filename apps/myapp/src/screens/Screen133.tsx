import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy133 } from '../generated/copy/copy133';
import { layout133 } from '../generated/layouts/layout133';
import { palette133 } from '../generated/palettes/palette133';

const RuntimeView133 = withUniwind(View);

export function Screen133() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView133 styleClassName={layout133.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy133.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy133.detail} / {palette133.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
