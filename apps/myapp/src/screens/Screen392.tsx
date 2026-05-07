import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy392 } from '../generated/copy/copy392';
import { layout392 } from '../generated/layouts/layout392';
import { palette392 } from '../generated/palettes/palette392';

const RuntimeView392 = withUniwind(View);

export function Screen392() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView392 styleClassName={layout392.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy392.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy392.detail} / {palette392.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
