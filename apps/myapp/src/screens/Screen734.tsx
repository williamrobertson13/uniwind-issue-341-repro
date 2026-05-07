import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy734 } from '../generated/copy/copy734';
import { layout734 } from '../generated/layouts/layout734';
import { palette734 } from '../generated/palettes/palette734';

const RuntimeView734 = withUniwind(View);

export function Screen734() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView734 styleClassName={layout734.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy734.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy734.detail} / {palette734.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
