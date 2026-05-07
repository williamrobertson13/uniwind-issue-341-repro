import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy224 } from '../generated/copy/copy224';
import { layout224 } from '../generated/layouts/layout224';
import { palette224 } from '../generated/palettes/palette224';

const RuntimeView224 = withUniwind(View);

export function Screen224() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView224 styleClassName={layout224.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy224.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy224.detail} / {palette224.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
