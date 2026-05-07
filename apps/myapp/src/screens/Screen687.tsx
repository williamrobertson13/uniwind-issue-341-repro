import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy687 } from '../generated/copy/copy687';
import { layout687 } from '../generated/layouts/layout687';
import { palette687 } from '../generated/palettes/palette687';

const RuntimeView687 = withUniwind(View);

export function Screen687() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView687 styleClassName={layout687.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy687.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy687.detail} / {palette687.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
