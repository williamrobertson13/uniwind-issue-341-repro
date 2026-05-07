import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy542 } from '../generated/copy/copy542';
import { layout542 } from '../generated/layouts/layout542';
import { palette542 } from '../generated/palettes/palette542';

const RuntimeView542 = withUniwind(View);

export function Screen542() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView542 styleClassName={layout542.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy542.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy542.detail} / {palette542.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
