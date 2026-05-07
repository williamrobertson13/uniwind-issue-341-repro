import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy760 } from '../generated/copy/copy760';
import { layout760 } from '../generated/layouts/layout760';
import { palette760 } from '../generated/palettes/palette760';

const RuntimeView760 = withUniwind(View);

export function Screen760() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView760 styleClassName={layout760.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy760.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy760.detail} / {palette760.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
