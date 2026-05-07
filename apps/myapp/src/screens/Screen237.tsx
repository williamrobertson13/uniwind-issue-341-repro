import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy237 } from '../generated/copy/copy237';
import { layout237 } from '../generated/layouts/layout237';
import { palette237 } from '../generated/palettes/palette237';

const RuntimeView237 = withUniwind(View);

export function Screen237() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView237 styleClassName={layout237.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy237.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy237.detail} / {palette237.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
